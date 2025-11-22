import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create leads data
    const leadData = {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      source: 'contact-form',
    }

    // Save to JSON file (for development)
    // In production, you would save to a database
    const dataDir = path.join(process.cwd(), 'data')
    const leadsFile = path.join(dataDir, 'leads.json')

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing leads or create new array
    let leads = []
    if (fs.existsSync(leadsFile)) {
      const fileContent = fs.readFileSync(leadsFile, 'utf-8')
      leads = JSON.parse(fileContent)
    }

    // Add new lead
    leads.push(leadData)

    // Write back to file
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2))

    // In production, you might also want to:
    // - Send email notification
    // - Save to database
    // - Send to CRM system

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

